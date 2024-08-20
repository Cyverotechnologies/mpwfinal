import React from "react";
import { FaBars } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import DashboardAvatarDropdown from "../Pages/Dashboard/DashboardAvatarDropdown";

function Navbar({ setAsideToggleActive }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const showNavbarContent = [
    "/profile",
    "/properties",
    "/properties/manage_properties",
    "/properties/manage_properties/add_property",
    "/properties/manage_properties/add_property/add_staff",
    "/properties/manage_block",
    "/properties/manage_rooms",
    "/properties/manage_floors",
    "/bookings",
    "/check-in",
    "/check-out",
    "/payments",
    "/payments/configure_payments",
    "/payments/payment_approvals",
    "/payments/rent_charges",
    "/expenses",
    "/guests",
    "/availability",
    "/reports",
    "/notices",
    "/complaints",
    "/tenants_approvals",
    "/support",
    "/change-properties",
  ];

  // Check if the current path is included in the paths that should show the navbar
  const shouldShowNavbar = showNavbarContent.includes(currentPath);

  return (
    shouldShowNavbar && (
      <div className="flex justify-between lg:justify-end items-center py-2">
        <div
          className="cursor-pointer text-2xl lg:hidden inline-block mb-5"
          onClick={() => setAsideToggleActive(true)}
        >
          <FaBars />
        </div>
        <DashboardAvatarDropdown />
      </div>
    )
  );
}

export default Navbar;
