import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy load the components
const Properties = lazy(() => import("./Components/Pages/Properties"));
const Bookings = lazy(() => import("./Components/Pages/Bookings"));
const Dashboard = lazy(() => import("./Components/Pages/Dashboard"));
const Profile = lazy(() => import("./Components/Pages/Profile"));
const Manage_Properties = lazy(() =>
  import("./Components/Pages/Manage_Properties/Manage_Properties")
);
const Aside = lazy(() => import("./Components/Common/Aside"));
const Manage_Block = lazy(() =>
  import("./Components/Pages/Manage_Properties/Manage_Block")
);
const Add_Staff = lazy(() =>
  import("./Components/Pages/Manage_Properties/Add_Staff")
);
const Add_Property = lazy(() =>
  import("./Components/Pages/Manage_Properties/Add_Property")
);
const Manage_Floors = lazy(() =>
  import("./Components/Pages/Manage_Properties/Manage_Floors")
);
const Navbar = lazy(() => import("./Components/Common/Navbar"));
const Manage_Rooms = lazy(() =>
  import("./Components/Pages/Manage_Properties/Manage_Rooms")
);
const CheckIn = lazy(() => import("./Components/Pages/CheckIn"));
const CheckOut = lazy(() => import("./Components/Pages/CheckOut"));
const Payment = lazy(() => import("./Components/Pages/Payment"));
const ConformPayment = lazy(() =>
  import("./Components/Pages/Payment/ConformPayment")
);
const PaymentApproval = lazy(() =>
  import("./Components/Pages/Payment/PaymentApproval")
);
const RentCharges = lazy(() =>
  import("./Components/Pages/Payment/RentCharges")
);
const Expenses = lazy(() => import("./Components/Pages/Expenses"));
const Guest = lazy(() => import("./Components/Pages/Guest"));
const Availability = lazy(() => import("./Components/Pages/Availability"));
const Report = lazy(() => import("./Components/Pages/Report"));
const Notice = lazy(() => import("./Components/Pages/Notices"));
const Complaint = lazy(() => import("./Components/Pages/Complaints"));
const Approval = lazy(() => import("./Components/Pages/Approvals"));
const Support = lazy(() => import("./Components/Pages/Support"));
const ChangeProperty = lazy(() => import("./Components/Pages/ChangeProperty"));

function App() {
  const [asideToggle, setAsideToggle] = useState(false);
  const asideRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setAsideToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Add or remove the no-scroll class based on the asideToggle state
    if (asideToggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [asideToggle]);

  return (
    <BrowserRouter>
      <div className={`min-h-screen flex relative `}>
        <aside
          ref={asideRef}
          className={`fixed left-0  top-0 z-[999] min-w-[250px]  bg-white h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500   border-e lg:transform-none duration-200 ${
            asideToggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Aside setAsideToggleActive={setAsideToggle} />
          </Suspense>
        </aside>
        <main className="ml-0 lg:ml-[250px] flex-1 lg:basis-[80%] lg:border-s ">
          <div className="mx-5 mt-5">
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar setAsideToggleActive={setAsideToggle} />
            </Suspense>
          </div>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-full text-xl text-gray-500">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={<Dashboard setAsideToggleActive={setAsideToggle} />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/properties" element={<Properties />} />
              <Route
                path="/properties/manage_properties"
                element={<Manage_Properties />}
              />
              <Route
                path="/properties/manage_properties/add_property"
                element={<Add_Property />}
              />
              <Route
                path="/properties/manage_properties/add_property/add_staff"
                element={<Add_Staff />}
              />
              <Route
                path="/properties/manage_block"
                element={<Manage_Block />}
              />
              <Route
                path="/properties/manage_rooms"
                element={<Manage_Rooms />}
              />
              <Route
                path="/properties/manage_floors"
                element={<Manage_Floors />}
              />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/check-in" element={<CheckIn />} />
              <Route path="/check-out" element={<CheckOut />} />
              <Route path="/payments" element={<Payment />} />
              <Route
                path="/payments/configure_payments"
                element={<ConformPayment />}
              />
              <Route
                path="/payments/payment_approvals"
                element={<PaymentApproval />}
              />
              <Route path="/payments/rent_charges" element={<RentCharges />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/guests" element={<Guest />} />
              <Route path="/availability" element={<Availability />} />
              <Route path="/reports" element={<Report />} />
              <Route path="/notices" element={<Notice />} />
              <Route path="/complaints" element={<Complaint />} />
              <Route path="/tenants_approvals" element={<Approval />} />
              <Route path="/support" element={<Support />} />
              <Route path="/change-properties" element={<ChangeProperty />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
