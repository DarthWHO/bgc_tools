import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";
import appData from "../data/appData.json";

export function useAppData() {
  const { data, isLoading, setData } = useLocalStorage(
    "oathswornAppData",
    null,
  );

  useEffect(() => {
    if (data === null) {
      setData(appData);
    }
  }, [data, setData]);

  const getOathswornActive = () => {
    if (!data) return;
    return data.oathswornActive;
  };

  const setOathswornActive = () => {
    if (!data) return;
    setData({ ...data, oathswornActive: !data.oathswornActive });
  };

  const resetAppDataToInitial = () => {
    setData(appData);
  };

  return {
    isLoading,
    getOathswornActive,
    setOathswornActive,
    resetAppDataToInitial,
  };
}
