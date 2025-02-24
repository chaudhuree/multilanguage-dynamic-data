import React from "react";
import { LanguageProvider } from "./LanguageContext";
import ProductList from "./ProductList";
import LanguageSwitcher from "./LanguageSwitcher";
import "./i18n";

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <LanguageSwitcher />
        <ProductList />
      </div>
    </LanguageProvider>
  );
};

export default App;
