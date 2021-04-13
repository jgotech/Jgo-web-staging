module.exports = appglobal = {
  api: {
    //staging
    base_api: "https://staging-api.jgo.com.ph",
    
    // prod
    //base_api: "https://app-api.jgo.com.ph",

    register_driver: "/api/auth/register-driver",
    login: "/api/auth/customer-login",
    register: "/api/auth/register",
    google_login: "/api/auth/google/details",
    facebook_login: "/api/auth/facebook/details",
    check_number: "/api/check-if-number-exist",
    send_otp: "/api/sms/send/otp/",
    verify_otp: "/api/sms/verify/otp/",
    cancel_otp: "/api/sms/otp/cancel/",
    check_number_otp: "/api/sms/otp/mobile_number/check/has-open-request/",
    forgot_password: "/api/send-password-link",
    show_driver: "/api/auth/show-driver-location",
    transaction_history: "/api/auth/ctransaction-history",
    latest_booking: "/api/auth/customer-latest-booking",
    timer_booking: "/api/auth/timer-booking",
    card_details: "/api/auth/customer_card_details",
    view_tickets: "/api/client_tickets/user/",
    customer_profile: "/api/auth/customer-profile",
    transaction_history_page: "/api/auth/ctransaction-history?page=",
    verify_token: "/api/auth/verifyToken",
    change_password: "/api/auth/change-password",
    save_profile: "/api/auth/customers/",
    enroll_token: "/api/auth/enrollToken",
    topup_jgowallet: "/api/auth/topUpJGOWallet",
    client_tickets: "/api/client_tickets",
    cancel_booking: "/api/auth/cancelBookings",
    hold_booking: "/api/auth/holdBookings",
    retry_booking: "/api/auth/retryBookings",
    additional_services: "/api/auth/additional_services",
    calculate_rate: "/api/auth/calculate-rate",
    booking: "/api/auth/booking",
    showdriver_location: "/api/auth/show-driver-location",
    logout: "/api/auth/logout",
    all_booking: "/api/auth/get-all-active-booking",
    scheduled_booking: "/api/auth/customer-scheduled-booking"
  },
};
