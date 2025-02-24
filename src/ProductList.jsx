import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageContext";

const ProductList = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Hardcoded product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a product description.",
      description_fr: "Ceci est une description de produit.",
      description_es: "Esta es una descripción del producto.",
      quantity: 10,
      features: {
        cpu: {
          description:
            "14 cores and 20 threads for a solid gaming and multitasking experience.",
          description_fr:
            "14 cœurs et 20 threads pour une expérience de jeu et de multitâche solide.",
          description_es:
            "14 núcleos y 20 hilos para una experiencia de juego y multitarea sólida.",
          baseClock: "3.50 GHz",
          boostClock: "5.10 GHz",
          cache: "24 MB Intel Smart Cache",
          cores: "14",
          threads: "20",
          TDP: "125W",
          socket: "LGA 1700",
        },
        memory: {
          description: "Supports DDR5/DDR4 memory for flexible memory options.",
          description_fr:
            "Prend en charge la mémoire DDR5/DDR4 pour des options de mémoire flexibles.",
          description_es:
            "Soporta memoria DDR5/DDR4 para opciones de memoria flexibles.",
          memorySupport: "DDR5-5600, DDR4-3200",
          maxMemory: "128 GB",
          channels: "Dual-channel",
        },
      },
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is another product description.",
      description_fr: "Ceci est une autre description de produit.",
      description_es: "Esta es otra descripción del producto.",
      quantity: 5,
    },
  ];

  const renderNestedData = (data) => {
    return Object.keys(data).map((key) => {
      if (typeof data[key] === "object" && data[key] !== null) {
        return (
          <div key={key}>
            <h3>{t(key)}</h3>
            {renderNestedData(data[key])}
          </div>
        );
      } else {
        const translatedKey = t(key);
        let value = data[key];

        // Handle description translation
        if (key === "description") {
          if (language === "fr") {
            value = data[`${key}_fr`];
          } else if (language === "es") {
            value = data[`${key}_es`];
          }
        }

        // Skip rendering description_fr and description_es fields
        if (key === "description_fr" || key === "description_es") {
          return null;
        }

        return (
          <p key={key}>
            <strong>{translatedKey}:</strong> {value}
          </p>
        );
      }
    });
  };

  return (
    <div>
      <h1>{t("name")}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>
              {t("description")}:{" "}
              {language === "fr"
                ? product.description_fr
                : language === "es"
                ? product.description_es
                : product.description}
            </p>
            <p>
              {t("quantity")}: {product.quantity}
            </p>
            {product.features && (
              <div>
                <h3>{t("features")}</h3>
                {renderNestedData(product.features)}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
