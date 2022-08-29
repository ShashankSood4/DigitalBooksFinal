import { DeclarationListEmitMode } from "@angular/compiler";

export interface Book { 
    bookId: number;
    logo: string;
    title: string;
    category:string;
    price: number;
    authorName: string;
    publisher: string;
    publishedDate: Date;
    content: string;
    active: boolean;      
    createdDate: Date;
    modifiedDate: Date;
}