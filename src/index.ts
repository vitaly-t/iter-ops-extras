export {appendIf, prependIf, replaceIf} from './inject-if';
export {average} from './average';
export {distinctValues} from './distinct-values';
export {distinctUntilChanged} from './distinct-until-changed';
export {filterNil} from './filter-nil';
export {groupBy, GroupByResult} from './group-by';
export {join} from './join';
export {max} from './max';
export {min} from './min';
export {minMax, MinMaxResult} from './min-max';
export {pluck} from './pluck';
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
