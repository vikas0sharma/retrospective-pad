import { SprintItemType } from './enums';

export class SprintItem {

    id: number;
    itemText: string;
    createdBy: number;
    createdOn: Date;
    itemType: SprintItemType;

}