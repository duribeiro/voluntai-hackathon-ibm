"""
Weather API Tool

This tool fetches current weather information for a specified location
using the WeatherAPI.com service.
"""

import requests
from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission


# WeatherAPI.com API key
WEATHER_API_KEY = ""
WEATHER_API_BASE_URL = "http://api.weatherapi.com/v1"


@tool(permission=ToolPermission.READ_ONLY)
def get_current_weather(location: str) -> dict:
    """
    Get current weather information for a specified location.
    
    This tool fetches real-time weather data including temperature, conditions,
    humidity, wind speed, and more from WeatherAPI.com.
    
    Args:
        location: City name, ZIP code, coordinates (lat,lon), or IP address.
                 Examples: "New York", "10001", "48.8567,2.3508", "auto:ip"
    
    Returns:
        Dictionary containing weather information:
        - location: Location details (name, region, country)
        - current: Current weather conditions (temp_c, temp_f, condition, humidity, wind, etc.)
        - success: Boolean indicating if the request was successful
        - error: Error message if the request failed
    
    Example:
        >>> get_current_weather("London")
        {
            "success": True,
            "location": {
                "name": "London",
                "region": "City of London, Greater London",
                "country": "United Kingdom",
                "lat": 51.52,
                "lon": -0.11
            },
            "current": {
                "temp_c": 15.0,
                "temp_f": 59.0,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
                },
                "humidity": 72,
                "wind_kph": 13.0,
                "wind_mph": 8.1
            }
        }
    """
    try:
        # Build API request URL
        url = f"{WEATHER_API_BASE_URL}/current.json"
        params = {
            "key": WEATHER_API_KEY,
            "q": location,
            "aqi": "no"  # Air quality index not needed
        }
        
        # Make API request
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        # Parse response
        data = response.json()
        
        return {
            "success": True,
            "location": {
                "name": data["location"]["name"],
                "region": data["location"]["region"],
                "country": data["location"]["country"],
                "lat": data["location"]["lat"],
                "lon": data["location"]["lon"],
                "localtime": data["location"]["localtime"]
            },
            "current": {
                "temp_c": data["current"]["temp_c"],
                "temp_f": data["current"]["temp_f"],
                "condition": {
                    "text": data["current"]["condition"]["text"],
                    "icon": data["current"]["condition"]["icon"]
                },
                "humidity": data["current"]["humidity"],
                "wind_kph": data["current"]["wind_kph"],
                "wind_mph": data["current"]["wind_mph"],
                "wind_dir": data["current"]["wind_dir"],
                "pressure_mb": data["current"]["pressure_mb"],
                "feelslike_c": data["current"]["feelslike_c"],
                "feelslike_f": data["current"]["feelslike_f"],
                "vis_km": data["current"]["vis_km"],
                "uv": data["current"]["uv"]
            }
        }
        
    except requests.exceptions.RequestException as e:
        return {
            "success": False,
            "error": f"Failed to fetch weather data: {str(e)}",
            "location": location
        }
    except KeyError as e:
        return {
            "success": False,
            "error": f"Unexpected API response format: {str(e)}",
            "location": location
        }
    except Exception as e:
        return {
            "success": False,
            "error": f"An error occurred: {str(e)}",
            "location": location
        }


@tool(permission=ToolPermission.READ_ONLY)
def get_weather_forecast(location: str, days: int = 3) -> dict:
    """
    Get weather forecast for a specified location.
    
    This tool fetches weather forecast data for up to 3 days from WeatherAPI.com.
    
    Args:
        location: City name, ZIP code, coordinates (lat,lon), or IP address.
                 Examples: "New York", "10001", "48.8567,2.3508"
        days: Number of days to forecast (1-3). Default is 3.
    
    Returns:
        Dictionary containing forecast information:
        - location: Location details
        - forecast: List of daily forecasts with conditions, temperatures, etc.
        - success: Boolean indicating if the request was successful
        - error: Error message if the request failed
    """
    try:
        # Validate days parameter
        if days < 1 or days > 3:
            days = 3
        
        # Build API request URL
        url = f"{WEATHER_API_BASE_URL}/forecast.json"
        params = {
            "key": WEATHER_API_KEY,
            "q": location,
            "days": days,
            "aqi": "no"
        }
        
        # Make API request
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        # Parse response
        data = response.json()
        
        # Extract forecast days
        forecast_days = []
        for day in data["forecast"]["forecastday"]:
            forecast_days.append({
                "date": day["date"],
                "max_temp_c": day["day"]["maxtemp_c"],
                "max_temp_f": day["day"]["maxtemp_f"],
                "min_temp_c": day["day"]["mintemp_c"],
                "min_temp_f": day["day"]["mintemp_f"],
                "avg_temp_c": day["day"]["avgtemp_c"],
                "avg_temp_f": day["day"]["avgtemp_f"],
                "condition": {
                    "text": day["day"]["condition"]["text"],
                    "icon": day["day"]["condition"]["icon"]
                },
                "max_wind_kph": day["day"]["maxwind_kph"],
                "total_precip_mm": day["day"]["totalprecip_mm"],
                "avg_humidity": day["day"]["avghumidity"],
                "chance_of_rain": day["day"]["daily_chance_of_rain"],
                "chance_of_snow": day["day"]["daily_chance_of_snow"]
            })
        
        return {
            "success": True,
            "location": {
                "name": data["location"]["name"],
                "region": data["location"]["region"],
                "country": data["location"]["country"]
            },
            "forecast": forecast_days
        }
        
    except requests.exceptions.RequestException as e:
        return {
            "success": False,
            "error": f"Failed to fetch forecast data: {str(e)}",
            "location": location
        }
    except Exception as e:
        return {
            "success": False,
            "error": f"An error occurred: {str(e)}",
            "location": location
        }

# Made with Bob
