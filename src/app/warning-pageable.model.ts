import { Warning } from './warning.model';

export class WarningPageable {
    
    constructor(
        public page: number,
        public size: number,
        public sort: string,
        public order: string,
        public total: number,
        public warnings: Warning[]
    ) {}
}