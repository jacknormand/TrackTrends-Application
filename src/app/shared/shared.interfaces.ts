export interface EventMappingItem {
    displayName: string;
    dbName: string;
    isRunningEvent: boolean;
}
  
export const eventMapping: EventMappingItem[] = [
    { displayName: "10,000 Meters", dbName: "10000Meters", isRunningEvent: true },
    { displayName: "100m Hurdles", dbName: "100Hurdles", isRunningEvent: true },
    { displayName: "100 Meters", dbName: "100Meters", isRunningEvent: true },
    { displayName: "110m Hurdles", dbName: "110Hurdles", isRunningEvent: true },
    { displayName: "1500 Meters", dbName: "1500Meters", isRunningEvent: true },
    { displayName: "200 Meters", dbName: "200Meters", isRunningEvent: true },
    { displayName: "3000 Meters", dbName: "3000Meters", isRunningEvent: true },
    { displayName: "3000m Steeplechase", dbName: "3000Steeplechase", isRunningEvent: true },
    { displayName: "400m Hurdles", dbName: "400Hurdles", isRunningEvent: true },
    { displayName: "400 Meters", dbName: "400Meters", isRunningEvent: true },
    { displayName: "4x100m Relay", dbName: "4x100Relay", isRunningEvent: true },
    { displayName: "4x400m Relay", dbName: "4x400Relay", isRunningEvent: true },
    { displayName: "5000 Meters", dbName: "5000Meters", isRunningEvent: true },
    { displayName: "60m Hurdles", dbName: "60Hurdles", isRunningEvent: true },
    { displayName: "60 Meters", dbName: "60Meters", isRunningEvent: true },
    { displayName: "800 Meters", dbName: "800Meters", isRunningEvent: true },
    { displayName: "Decathlon", dbName: "Decathlon", isRunningEvent: false },
    { displayName: "Discus", dbName: "Discus", isRunningEvent: false },
    { displayName: "Distance Medley Relay", dbName: "DistanceMedleyRelay", isRunningEvent: true },
    { displayName: "Hammer", dbName: "Hammer", isRunningEvent: false },
    { displayName: "Heptathlon", dbName: "Heptathlon", isRunningEvent: false },
    { displayName: "High Jump", dbName: "HighJump", isRunningEvent: false },
    { displayName: "Javelin", dbName: "Javelin", isRunningEvent: false },
    { displayName: "Long Jump", dbName: "LongJump", isRunningEvent: false },
    { displayName: "Mile", dbName: "Mile", isRunningEvent: true },
    { displayName: "Pentathlon", dbName: "Pentathlon", isRunningEvent: false },
    { displayName: "Pole Vault", dbName: "PoleVault", isRunningEvent: false },
    { displayName: "Shot Put", dbName: "ShotPut", isRunningEvent: false },
    { displayName: "Triple Jump", dbName: "TripleJump", isRunningEvent: false },
    { displayName: "Weight Throw", dbName: "WeightThrow", isRunningEvent: false },
];
  
// Function to convert seconds to minute/seconds format
export function convertFloatToTime(floatValue: number): string {
    const totalSeconds = Math.floor(floatValue);
    
    if (totalSeconds >= 60) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const milliseconds = Math.round((floatValue - totalSeconds) * 1000);
  
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
    } else {
      // If less than 1 minute, show seconds only
      const seconds = totalSeconds + (floatValue - totalSeconds);
      return `${seconds.toFixed(2)}`;
    }
  }

