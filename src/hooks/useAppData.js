import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";
import appData from "../data/appData.json";

export function useAppData() {
  const { data, isLoading, setDataAsync } = useLocalStorage(
    "oathswornAppData",
    null,
  );

  useEffect(() => {
    if (data === null) {
      setDataAsync(appData);
    }
  }, [data, setDataAsync]);

  const getOathswornActive = () => {
    if (!data) return;
    return data.oathswornActive;
  };

  const setOathswornActive = async () => {
    if (!data) return;
    await setDataAsync({ ...data, oathswornActive: !data.oathswornActive });
  };

  const resetAppDataToInitial = async () => {
    await setDataAsync(appData);
  };

  return {
    isLoading,
    getOathswornActive,
    setOathswornActive,
    resetAppDataToInitial,
  };
}
