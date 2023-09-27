import { Badge, Button, Col, Row, Stack } from 'react-bootstrap';
import { useNote } from './Layout';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

type Props = {
  deleteNote: (id: string) => void;
};

const NoteDetail = ({ deleteNote }: Props) => {
  // kapsayı route'dan gelen verielere erişme
  const note = useNote();

  return (
    <>
      <Row>
        <Col>
          <h1>{note.title}</h1>

          {note.tags.length > 0 && (
            <Stack direction="horizontal">
              {note.tags.map((tag) => (
                <Badge>{tag.label}</Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs={'auto'}>
          <Stack direction="horizontal" gap={2}>
            <Link to={`/${note.id}/edit`}>
              <Button variant="outline-primary">Düzenle</Button>
            </Link>

            <Button
              onClick={() => deleteNote(note.id)}
              variant="outline-danger"
            >
              Sil
            </Button>

            <Link to={'/'}>
              <Button variant="outline-secondary">Geri</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
};

export default NoteDetail;
