export enum newsViewTypeEnum {
  LIST = 'LIST',
  GRID = 'GRID'
}

export interface ConfigurationState {
  newsViewType: newsViewTypeEnum
}
