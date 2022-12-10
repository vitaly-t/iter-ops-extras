export {appendIf, prependIf, replaceIf} from './inject-if';
export {average} from './average';
export {numberStats, NumberStatsResult} from './number-stats';
export {distinctValues} from './distinct-values';
export {distinctUntilChanged} from './distinct-until-changed';
export {filterString, filterNumber, filterBoolean, filterBigInt} from './filter-type';
export {group, GroupResult} from './group';
export {join} from './join';
export {mapWait} from './map-wait';
export {max} from './max';
export {min} from './min';
export {pluck} from './pluck';
export {removeNil} from './remove-nil';
export {repeatAll} from './repeat-all';
export {replaceNil} from './replace-nil';
export {slice} from './slice';
export {sum} from './sum';
export {tapLog} from './tap-log';
export {tapOnce} from './tap-once';
export {toBuffer} from './to-buffer';

// Operator toReadable requires "stream" to be installed when used in web clients.
// That's why it is by default excluded here (uncomment, if it is needed):

// export {toReadable} from './to-readable';
