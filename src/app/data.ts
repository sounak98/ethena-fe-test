import { Collateral, Platform } from "./types";

export const activePlatforms = [
  Platform.Binance,
  Platform.Bybit,
  Platform.Bitget,
  Platform.Deribit,
  Platform.OKX,
  Platform.BitMEX,
];

export const collateralData = {
  [Collateral.stETH]: {
    [Platform.Binance]: 100_100_000,
    [Platform.Bybit]: 150_200_000,
    [Platform.Bitget]: 200_300_000,
    [Platform.Deribit]: 250_400_000,
    [Platform.OKX]: 300_500_000,
    [Platform.BitMEX]: 350_600_000,
  },
  [Collateral.WBETH]: {
    [Platform.Binance]: 50_700_000,
    [Platform.Bybit]: 100_800_000,
    [Platform.Bitget]: 150_900_000,
    [Platform.Deribit]: 200_000_000,
    [Platform.OKX]: 250_100_000,
    [Platform.BitMEX]: 300_200_000,
  },
  [Collateral.mETH]: {
    [Platform.Binance]: 150_300_000,
    [Platform.Bybit]: 200_400_000,
    [Platform.Bitget]: 250_500_000,
    [Platform.Deribit]: 300_600_000,
    [Platform.OKX]: 350_700_000,
    [Platform.BitMEX]: 400_800_000,
  },
  [Collateral.LsETH]: {
    [Platform.Binance]: 20_900_000,
    [Platform.Bybit]: 30_000_000,
    [Platform.Bitget]: 40_100_000,
    [Platform.Deribit]: 50_200_000,
    [Platform.OKX]: 60_300_000,
    [Platform.BitMEX]: 70_400_000,
  },
  [Collateral.ETH]: {
    [Platform.Binance]: 0,
    [Platform.Bybit]: 50_500_000,
    [Platform.Bitget]: 0,
    [Platform.Deribit]: 0,
    [Platform.OKX]: 30_600_000,
    [Platform.BitMEX]: 0,
  },
  [Collateral.USDT]: {
    [Platform.Binance]: 100_700_000,
    [Platform.Bybit]: 300_800_000,
    [Platform.Bitget]: 200_900_000,
    [Platform.Deribit]: 500_000_000,
    [Platform.OKX]: 540_100_000,
    [Platform.BitMEX]: 330_200_000,
  },
};
