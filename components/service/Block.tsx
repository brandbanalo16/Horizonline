import { Target, Briefcase, Users, Award, Shield, Globe, Building, Search, FileText } from 'lucide-react';

export const Block = ({ b }: { b: any }) => {
  if (b.type === 'paragraph') return <p className="sp-section-p">{b.text}</p>;
  if (b.type === 'list') return (
    <ul className="sp-list-simple">
      {b.items?.map((item: string, i: number) => <li key={i}>{item}</li>)}
    </ul>
  );
  return null;
};

export const ICONS = [
  <Target key={0} />, <Briefcase key={1} />, <Users key={2} />,
  <Award key={3} />, <Shield key={4} />, <Globe key={5} />,
  <Building key={6} />, <Search key={7} />, <FileText key={8} />
];
