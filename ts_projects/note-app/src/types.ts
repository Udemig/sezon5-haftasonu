export type Note = {
  id: string;
} & NoteData; // noteData'nın bütün tiplerini buraya aktarır

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[]; // {id:"12312",label:"Eğlence"}
};

export type Tag = {
  id: string;
  label: string;
};

//local strogae'a gönderilecek tipler
export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagId: string[]; // ["asd123","fdsaf123"]
};
