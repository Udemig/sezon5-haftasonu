import { NoteData, Tag } from '../../types';
import NoteForm from './NoteForm';

export type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

const NewNote = ({
  onSubmit,
  createTag,
  availableTags,
}: NewNoteProps) => {
  return (
    <>
      <h1>Yeni Not Ekle</h1>
      <NoteForm
        onSubmit={onSubmit}
        createTag={createTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
