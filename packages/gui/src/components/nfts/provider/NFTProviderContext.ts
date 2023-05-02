import { type NFTInfo } from '@chia-network/api';
import { createContext } from 'react';

import type MetadataState from '../../../@types/MetadataState';
import type NFTState from '../../../@types/NFTState';

const NFTProviderContext = createContext<
  | {
      nfts: Map<string, NFTInfo>;
      nachos: Map<string, NFTInfo>;

      count: number;
      loaded: number;
      progress: number;

      isLoading: boolean;
      error: Error | undefined;

      invalidate: (id: string | undefined) => Promise<void>;

      onChange: (callback: () => void) => () => void;

      getNFT: (id: string | undefined) => NFTState;
      onNFTChange: (id: string | undefined, callback: (nftState: NFTState) => void) => () => void;

      getMetadata: (id: string | undefined) => MetadataState;
      onMetadataChange: (id: string | undefined, callback: (metadataState: MetadataState) => void) => () => void;
    }
  | undefined
>(undefined);

export default NFTProviderContext;
