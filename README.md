# Vistr-Bangkit-CC


## GET /get-all-place?page={number}&limit={number}

Retrieves a paginated list of places.

**Parameters:**

- `page` (optional): The page number to retrieve (default: 1).
- `limit` (optional): The number of places per page (default: 10).

**Response:**

The response will contain the following fields:

- `status` (string): The status of the response ("success" or "fail").
- `places` (array): An array of places containing the following information:
  - `id` (number): The ID of the place.
  - `place_name` (string): The name of the place.
  - `description` (string): The description of the place.
  - `activity` (string): The activity of the place.
  - `min_price` (number): The minimum price of the place.
  - `max_price` (number): The maximum price of the place.
  - `rating` (number): The rating of the place.
  - `latitude` (number): The latitude coordinate of the place.
  - `longitude` (number): The longitude coordinate of the place.
  - `city` (object): The city information containing the following:
    - `id` (number): The ID of the city.
    - `name` (string): The name of the city.
  - `categories` (array): An array of category names associated with the place.
- `totalPages` (number): The total number of pages available.
- `currentPage` (number): The current page number.

**Example Request:**

```
GET /get-all-place?page=2&limit=10
```

**Example Response:**

```json
{
  "status": "success",
  "places": [
    {
      "id": 1,
      "place_name": "Place 1",
      "description": "Description of Place 1",
      "activity": "Activity of Place 1",
      "min_price": 100,
      "max_price": 200,
      "rating": 4,
      "latitude": 123.456,
      "longitude": 789.012,
      "city": {
        "id": 1,
        "name": "City 1"
      },
      "categories": [
        "Category 1",
        "Category 2"
      ]
    },
    // ... more places
  ],
  "totalPages": 5,
  "currentPage": 2
}
```

## GET /get-by-id/{id}

Retrieves a specific place by its ID.

**Parameters:**

- `id` (path parameter): The ID of the place.

**Response:**

The response will contain the following fields:

- `status` (string): The status of the response ("success" or "fail").
- `place` (object): The place information with the specified ID, including the following details:
  - `id` (number): The ID of the place.
  - `place_name` (string): The name of the place.
  - `description` (string): The description of the place.
  - `activity` (string): The activity of the place.
  - `min_price` (number): The minimum price of the place.
  - `max_price` (number): The maximum price of the place.
  - `rating` (number): The rating of the place.
  - `latitude` (number): The latitude coordinate of the place.
  - `longitude` (number): The longitude coordinate of the place.
  - `city` (object): The city information containing the following:
    - `id` (number): The ID of the city.
    - `name` (string): The name of the city.
  - `categories` (array): An array of category names associated with the place.

**Example Request:**

```
GET /get-by-id/:id
```

**Example Response:**

```json
{
  "status": "success",
  "place": {
    "id": 1,
    "place_name": "Place 1",
    "description": "Description of Place 1",
    "activity": "Activity of Place 1",
    "min_price": 100,
    "max_price": 200,
    "rating": 4,
    "latitude": 123.456,
    "longitude": 789.012,
    "city": {
      "id": 1,
      "name": "City 1"
    },
    "categories": [
      "Category 1",
      "Category 2"
    ]
  }
}
```

Sure! Here's the documentation for the `GET /places/multiple-categories` endpoint:

## GET /places/get-by-category

Retrieves places based on multiple categories.

**Parameters:**

- `categories` (query parameter): A comma-separated list of category names.

**Response:**

The response will contain the following fields:

- `status` (string): The status of the response ("success" or "fail").
- `data` (array): An array of places that belong to at least one of the specified categories. Each place object contains the following details:
  - `id` (number): The ID of the place.
  - `place_name` (string): The name of the place.
  - `description` (string): The description of the place.
  - `activity` (string): The activity of the place.
  - `min_price` (number): The minimum price of the place.
  - `max_price` (number): The maximum price of the place.
  - `rating` (number): The rating of the place.
  - `latitude` (number): The latitude coordinate of the place.
  - `longitude` (number): The longitude coordinate of the place.
  - `city` (object): The city information containing the following:
    - `id` (number): The ID of the city.
    - `name` (string): The name of the city.
  - `categories` (array): An array of category names associated with the place.

**Example Request:**

```
GET /places/get-by-category?categories=Category1,Category2,Category3
```

**Example Response:**

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "place_name": "Place 1",
      "description": "Description of Place 1",
      "activity": "Activity of Place 1",
      "min_price": 100,
      "max_price": 200,
      "rating": 4,
      "latitude": 123.456,
      "longitude": 789.012,
      "city": {
        "id": 1,
        "name": "City 1"
      },
      "categories": [
        "Category 1",
        "Category 2"
      ]
    },
    {
      "id": 2,
      "place_name": "Place 2",
      "description": "Description of Place 2",
      "activity": "Activity of Place 2",
      "min_price": 150,
      "max_price": 250,
      "rating": 4,
      "latitude": 123.789,
      "longitude": 789.345,
      "city": {
        "id": 2,
        "name": "City 2"
      },
      "categories": [
        "Category 1",
        "Category 3"
      ]
    }
  ]
}
```

## GET /places/search-by-field

Retrieves a paginated list of places based on the specified search criteria.

**URL:** `/places/search-by-field`

**Method:** `GET`

**Query Parameters:**
- `search` (optional): The search keyword to match against the place name or category(it can search category in city ) or city name .
- `sortField` (optional): The field to sort the places by. Possible values: `name`, `category`, `rating`. Default: `rating`.
- `rating` (optional): Filters the places by rating. Only places with the specified rating or higher will be included.
- `page` (optional): The page number to retrieve (default: 1).
- `limit` (optional): The number of places per page (default: 10).
- `city` (optional): Filters the places by city. Only places in the specified city will be included.

**Example URL:** `/places/search-by-field?search=Beach&sortField=category&page=1&rating=4&city=Balikpapan`

**Response:**
- `status` (string): The status of the response ("success" or "fail").
- `places` (array): An array of places containing the following information:
  - `id` (number): The ID of the place.
  - `place_name` (string): The name of the place.
  - `description` (string): The description of the place.
  - `activity` (string): The activity of the place.
  - `min_price` (number): The minimum price of the place.
  - `max_price` (number): The maximum price of the place.
  - `rating` (number): The rating of the place.
  - `latitude` (number): The latitude coordinate of the place.
  - `longitude` (number): The longitude coordinate of the place.
  - `city` (object): The city information containing the following:
    - `id` (number): The ID of the city.
    - `name` (string): The name of the city.
  - `categories` (array): An array of category names associated with the place.
- `totalPages` (number): The total number of pages available.
- `currentPage` (number): The current page number.