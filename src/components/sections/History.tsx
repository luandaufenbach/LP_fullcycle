import { teamNotes, timeline, timelinePersonLabels } from '@/content/team';
import { Heading, Label, SectionHeader } from '@/components/ui/Typography';
import { cn } from '@/lib/cn';

export function History() {
  return (
    <section className="fc-section fc-on-sunken" aria-labelledby="trajetoria-titulo">
      <div className="fc-container">
        <SectionHeader id="trajetoria-titulo" title="Duas trajetórias, um ciclo completo" />

        <ol className="fc-timeline">
          {timeline.map((item) => (
            <li
              key={item.year + item.title}
              data-person={item.person}
              className={cn('fc-timeline__item', item.person === 'both' && 'fc-on-dark')}
            >
              <div className="fc-timeline__when">
                <span className="fc-timeline__year">{item.year}</span>
                <Label tone="strong" size="s">
                  {timelinePersonLabels[item.person]}
                </Label>
              </div>
              <Heading level={3} size="title" className="fc-timeline__title">
                {item.title}
              </Heading>
              <p className="fc-timeline__text">{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="fc-history-notes">
          {teamNotes.map((note) => (
            <div key={note.title} className="fc-history-note">
              <Heading level={3} size="heading">
                {note.title}
              </Heading>
              <p className="fc-body">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
