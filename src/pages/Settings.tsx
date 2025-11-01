import { useState, useEffect, ChangeEvent } from "react";
import { User, Palette, Database, Key } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>

      <div className="tabs tabs-boxed">
        <a className={`tab ${activeTab === 'general' ? 'tab-active' : ''}`} onClick={() => setActiveTab('general')}><User className="mr-2"/> General</a>
        <a className={`tab ${activeTab === 'appearance' ? 'tab-active' : ''}`} onClick={() => setActiveTab('appearance')}><Palette className="mr-2"/> Appearance</a>
        <a className={`tab ${activeTab === 'backup' ? 'tab-active' : ''}`} onClick={() => setActiveTab('backup')}><Database className="mr-2"/> Backup & Restore</a>
        <a className={`tab ${activeTab === 'licensing' ? 'tab-active' : ''}`} onClick={() => setActiveTab('licensing')}><Key className="mr-2"/> Licensing</a>
      </div>

      <div className="card bg-base-100 shadow-lg mt-4">
        <div className="card-body">
          {activeTab === 'general' && (
            <div>
              <h2 className="card-title">General Settings</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Language</span>
                </label>
                <select className="select select-bordered">
                  <option>English</option>
                  <option>Français</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div>
              <h2 className="card-title">Appearance</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Theme</span>
                </label>
                <select className="select select-bordered" value={theme} onChange={handleThemeChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="cupcake">Cupcake</option>
                    <option value="bumblebee">Bumblebee</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'backup' && (
            <div>
                <h2 className="card-title">Backup & Restore</h2>
                <p>Manage your application data.</p>
                <div className="mt-4">
                    <button className="btn btn-primary mr-2">Backup Now</button>
                    <button className="btn btn-secondary">Restore from Backup</button>
                </div>
            </div>
          )}

          {activeTab === 'licensing' && (
            <div>
                <h2 className="card-title">Licensing</h2>
                <p>License Status: <span className="font-bold text-success">Active</span></p>
                <p>Expires on: 2024-12-31</p>
                <div className="mt-4">
                    <button className="btn btn-primary">Check for Updates</button>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
