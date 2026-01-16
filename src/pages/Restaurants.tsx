import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";
import RestaurantModal from "../components/RestaurantModal";
import restaurantsData from "../data/restaurants.json";
import type { Restaurant } from "../types/restaurant";

export default function Restaurants() {
  const navigate = useNavigate();
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const restaurants = restaurantsData as Restaurant[];

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    // Optionnel: naviguer vers la page de détail
    // navigate(`/restaurant/${restaurant.id}`);
  };

  const handleCloseModal = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <RestaurantList
        restaurants={restaurants}
        onRestaurantClick={handleRestaurantClick}
      />

      <RestaurantModal
        restaurant={selectedRestaurant}
        onClose={handleCloseModal}
      />
    </div>
  );
}
