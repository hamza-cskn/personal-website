package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type Data struct {
    Name  string `json:"name"`
    Value int    `json:"value"`
}

var data []Data

func main() {
    // Define some sample data
    data = []Data{
        {Name: "foo", Value: 123},
        {Name: "bar", Value: 456},
    }

    // Define your API endpoints
    http.HandleFunc("/api/data", getData)

    // Start the server
    log.Fatal(http.ListenAndServe(":8080", nil))
}

// Define a function to handle the /api/data endpoint
func getData(w http.ResponseWriter, r *http.Request) {
    // Set the content type of the response to JSON
    w.Header().Set("Content-Type", "application/json")

    // Convert the data slice to JSON and write it to the response
    json.NewEncoder(w).Encode(data)
}