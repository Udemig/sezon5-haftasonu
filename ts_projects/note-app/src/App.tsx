import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewNote from './pages/Form/NewNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { NoteData, RawNote, Tag } from './types';
import { useLocaleStorage } from './useLocalStorage';
import { v4 } from 'uuid';
import { useMemo } from 'react';
import MainPage from './pages/MainPage';
import NoteDetail from './pages/NoteDetail/NoteDetail';
import EditNote from './pages/Form/EditNote';
import Layout from './pages/NoteDetail/Layout';

function App() {
  const [notes, setNotes] = useLocaleStorage<RawNote[]>('notes', []);
  const [tags, setTags] = useLocaleStorage<Tag[]>('tags', []);

  // etiketilerin id'lerinden yola çıkarak
  // hangi etiketin tyüm bilgilerine note'lara ekler
  const noteWithTags = useMemo(() => {
    // nottaki etiket idleri yerine etiket isinlerini aktarma
    return notes.map((note) => ({
      ...note,
      tags: tags.filter((tag) => note.tagId.includes(tag.id)),
    }));
  }, [notes, tags]);

  // lokal'e yeni not ekler
  const createNote = ({ tags, ...data }: NoteData) => {
    setNotes((prev) => [
      // daha önceden eklenen elemanları muhafaza eder
      ...prev,
      // eklenicek yeni elemanın bilgileri
      { ...data, id: v4(), tagId: tags.map((tag) => tag.id) },
    ]);
  };

  // lokal'e yeni etiket ekler
  const createTag = (tag: Tag) => {
    setTags((prev: any) => [...prev, tag]);
  };

  // elemanı siler
  const deleteNote = (id: string) => {
    const filtred = notes.filter((note) => note.id !== id);

    setNotes(filtred);
  };

  const handleEditNote = (
    id: string,
    { tags, ...data }: NoteData
  ) => {
    // güncelleme
    const updated = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            ...data,
            tagId: tags.map((tag) => tag.id),
          }
        : note
    );

    setNotes(updated);
  };

  return (
    <BrowserRouter>
      <Container className="pt-4">
        <Routes>
          <Route
            path="/"
            element={
              <MainPage notes={noteWithTags} availableTags={tags} />
            }
          />
          <Route
            path="/new"
            element={
              <NewNote
                onSubmit={createNote}
                createTag={createTag}
                availableTags={tags}
              />
            }
          />

          <Route
            path="/:id"
            element={<Layout notes={noteWithTags} />}
          >
            <Route
              index
              element={<NoteDetail deleteNote={deleteNote} />}
            />
            <Route
              path="edit"
              element={
                <EditNote
                  onSubmit={handleEditNote}
                  createTag={createTag}
                  availableTags={tags}
                />
              }
            />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
