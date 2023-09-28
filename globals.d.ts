interface Cookiebot {
    show: () => void;
    // Add other methods/properties of Cookiebot if needed
}
  
interface Window {
    Cookiebot: Cookiebot;
}