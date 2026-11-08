import { teamIntro, teamMembers, teamNotes, type TeamMember } from '@/content/team';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Button } from '@/components/ui/Button';
import { Portrait, PortraitPlaceholder } from '@/components/ui/Portrait';
import { Heading, Label, SectionHeader } from '@/components/ui/Typography';

export function Team() {
  return (
    <section id="equipe" className="fc-section--xl fc-on-light">
      <div className="fc-container">
        <SectionHeader title="Quem conduz o seu projeto" aside={teamIntro} />

        <div className="fc-team">
          {teamMembers.map((member) => (
            <MemberProfile key={member.name} member={member} />
          ))}
        </div>

        <div className="fc-team-notes">
          {teamNotes.map((note) => (
            <div key={note.title} className="fc-team-note">
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

function MemberProfile({ member }: { member: TeamMember }) {
  return (
    <article className="fc-member">
      <div className="fc-member__head">
        {member.photo ? (
          <Portrait
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            sizes="(max-width: 900px) 112px, 160px"
          />
        ) : (
          <PortraitPlaceholder name={member.name} />
        )}
        <div className="fc-member__id">
          <Heading level={3} size="heading">
            {member.name}
          </Heading>
          <p className="fc-member__role">{member.role}</p>
          <Label size="s">{member.registry}</Label>
        </div>
      </div>

      <p className="fc-body">{member.bio}</p>

      {(member.cv || member.linkedin) && (
        <div className="fc-member__actions">
          {member.cv && (
            <Button href={member.cv} variant="outline" icon="download" download>
              Baixar currículo (PDF)
            </Button>
          )}
          {member.linkedin && <ArrowLink href={member.linkedin}>Ver perfil no LinkedIn</ArrowLink>}
        </div>
      )}
    </article>
  );
}
