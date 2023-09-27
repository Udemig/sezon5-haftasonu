import { FormEvent, useRef, useState } from 'react';
import { Col, Row, Stack, Form, Button } from 'react-bootstrap';
import ReactSelect from 'react-select/creatable';
import { NewNoteProps } from './NewNote';
import { NoteData, Tag } from '../../types';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const NoteForm = ({
  onSubmit,
  createTag,
  availableTags,
  title = '',
  markdown = '',
  tags = [],
}: NewNoteProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // kullanmak istedğimiz değerin null
    // olabileceğinden kaynaklı uyarıları
    // görmezden gelmek istiyorsak javascriptte ?
    // ile benzer bir şekilde koşul tanımalayan !  kullanırız
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });

    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Başlık</Form.Label>
              <Form.Control
                defaultValue={title}
                ref={titleRef}
                className="shadow"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etiketler</Form.Label>
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
                // yeni etiketl oluşturma
                onCreateOption={(label) => {
                  const newTag: Tag = { id: v4(), label };
                  createTag(newTag);
                  setSelectedTags([...selectedTags, newTag]);
                }}
                // options
                options={availableTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* text içeriği */}
        <Form.Group>
          <Form.Label>İçerik</Form.Label>
          <Form.Control
            defaultValue={markdown}
            ref={markdownRef}
            as={'textarea'}
            rows={15}
            required
            className="shadow"
          />
        </Form.Group>
        {/* butonlar */}
        <Stack direction="horizontal">
          <Button type="submit">Kaydet</Button>
          <Button
            onClick={() => navigate(-1)}
            type="button"
            variant="secondary"
          >
            İptal
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
