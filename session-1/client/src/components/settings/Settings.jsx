import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

// Esta misma logica puede hacer con cookies u otros tipos
const defaultConfig = {
  theme: "Dark",
  lang: "es",
};

const Settings = () => {
  const [config, setConfig] = useLocalStorage("config", defaultConfig);

  const handleClick = (e) => {
    setConfig((oldConfig) => ({
      ...oldConfig,
      theme: "light",
    }));
  };

  return (
    <div>
      <h1>App Settings</h1>
      <p>Actual config: {config}</p>
      <button type="button" onClick={handleClick}>
        Save new settings
      </button>
    </div>
  );
};

export default Settings;
