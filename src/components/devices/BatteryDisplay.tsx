import React from "react";
import { BatteryFull, BatteryLow, BatteryMedium } from "lucide-react";

interface BatteryDisplayProps {
  battery: number;
  showNumber?: boolean;
}

const BatteryDisplay: React.FC<BatteryDisplayProps> = ({
  battery,
  showNumber,
}) => {
  const getBatteryIcon = () => {
    if (battery >= 50)
      return (
        <BatteryFull
          className="text-success"
          data-testid="device-battery-icon"
        />
      );
    if (battery > 25)
      return (
        <BatteryMedium
          className="text-warning"
          data-testid="device-battery-icon"
        />
      );
    return (
      <BatteryLow className="text-error" data-testid="device-battery-icon" />
    );
  };

  return (
    <>
      {!showNumber && getBatteryIcon()}
      {showNumber && <span>{battery}%</span>}
    </>
  );
};

export default BatteryDisplay;
