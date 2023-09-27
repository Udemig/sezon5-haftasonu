import {
  Button,
  Col,
  Row,
  Stack,
  Form,
  Card,
  Badge,
} from 'react-bootstrap';
import { Note, Tag } from '../types';
import { Link } from 'react-router-dom';
import ReactSelect from 'react-select';
import { useEffect, useMemo, useState } from 'react';
import styles from './mainpage.module.css';

type MainProps = {
  notes: Note[];
  availableTags: Tag[];
};
const MainPage = ({ notes, availableTags }: MainProps) => {
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const filtredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        // note'un başlığı aram metnini içeriyorsa ilgili başlıkları döndür
        (title === '' ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        // eğer hiç bir etiket seçilmediyse veya notun etiketlerinden biti
        // seçilen etiketlerinden biriyle eşleşen dödürür
        // every seçilen her etiket için some():çalıştırır >
        // notun etiketlerinin en az biri seçili etiketlerle eşleşiyor mu kontrol eder
        (selectedTags.length == 0 ||
          selectedTags.every((tag) =>
            note.tags.some((noteTag) => noteTag.id === tag.id)
          ))
      );
    });
  }, [title, selectedTags, notes]);

  return (
    <>
      {/* header */}
      <Stack
        direction="horizontal"
        className="justify-content-between mb-3"
      >
        <h1>Notlar</h1>

        <Link to={'/new'}>
          <Button>Oluştur</Button>
        </Link>
      </Stack>

      {/* filteleme */}
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa göre ara</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etikete göre ara</Form.Label>
              <ReactSelect
                isMulti
                className="shadow"
                // daha önce seçilenleri belirleme
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                // seçilenleri state'e aktarır
                onChange={(tags) =>
                  setSelectedTags(
                    tags.map((tag) => ({
                      label: tag.label,
                      id: tag.value,
                    }))
                  )
                }
                // options
                options={availableTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* notlar */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        {filtredNotes.map((note) => (
          <Col key={note.id}>
            <NoteCard
              id={note.id}
              tags={note.tags}
              title={note.title}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MainPage;

type CardType = {
  id: string;
  title: string;
  tags: Tag[];
};

function NoteCard({ id, title, tags }: CardType) {
  return (
    <Card as={Link} to={`/${id}`} className={styles.card}>
      <Card.Body>
        <Stack
          className="align-items-center justify-content-between h-100"
          gap={2}
        >
          <span>{title}</span>

          {tags.length > 0 && (
            <Stack
              direction="horizontal"
              className="justify-content-center flex-wrap "
            >
              {tags.map((tag) => (
                <Badge>{tag.label}</Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
}
