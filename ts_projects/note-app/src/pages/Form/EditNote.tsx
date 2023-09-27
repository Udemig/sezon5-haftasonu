import { NoteData, Tag } from '../../types';
import { useNote } from '../NoteDetail/Layout';
import NoteForm from './NoteForm';

type EditProps = {
  onSubmit: (id: string, data: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const EditNote = ({
  onSubmit,
  createTag,
  availableTags,
}: EditProps) => {
  const note = useNote();
  return (
    <>
      <h1>Note'u düzenle</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        createTag={createTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default EditNote;
