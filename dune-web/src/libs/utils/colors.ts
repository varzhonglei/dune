import { MiBaoColor } from "../../../../common/typing";

export const ColorFilters = {
    [MiBaoColor.black]: 'sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);',
    [MiBaoColor.blue]: 'sepia(0%) saturate(100%) hue-rotate(200deg) brightness(100%) contrast(100%);',
    [MiBaoColor.green]: 'sepia(0%) saturate(100%) hue-rotate(110deg) brightness(100%) contrast(100%);',
    [MiBaoColor.red]: 'sepia(0%) saturate(100%) hue-rotate(10deg) brightness(100%) contrast(100%);',
    [MiBaoColor.yellow]: 'sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);',
}