import {TablaA} from "../tablas/tabla.model";

export interface TablaAReducerModel {
 columnas: TablaA;
 loading: boolean;
 error: any;
}
