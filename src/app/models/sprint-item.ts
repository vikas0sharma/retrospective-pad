import { SprintItemType } from './enums';

export class SprintItem {

    id: number;
    itemTitle: string;
    itemText: string;
    createdBy: number;
    createdOn: Date;
    itemType: SprintItemType;

}