package main

import (
	"fork-go/handlers"
	"log"
	"net/http"
)

func main() {
	handlers.Upgrader.CheckOrigin = func(r *http.Request) bool {
		return true
	}

	http.HandleFunc("/ws", handlers.Handler)
	log.Fatal(http.ListenAndServe(":8089", nil))
}
