import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDraggable } from '@dnd-kit/core';
import {
  Type, Mail, Heading, Pilcrow, Hash, Globe, Phone, KeyRound, Star, MessageSquareQuote,
  List, ListOrdered, Minus, Code2, Calendar, Clock, Image, ChevronsUpDown, CheckSquare2, FileUp
} from 'lucide-react';

const DraggableToolboxButton = ({ type, label, icon }: { type: string; label: string; icon: React.ReactNode }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: type,
    data: {
      isToolboxElement: true,
    },
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      <ToolboxButton label={label} icon={icon} />
    </div>
  );
};

const Toolbox = () => {
  const { t } = useTranslation();
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r overflow-y-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('toolbox_content')}</h3>
          <div className="grid grid-cols-2 gap-2">
            <DraggableToolboxButton type="heading" label={t('toolbox_heading')} icon={<Heading size={20} />} />
            <DraggableToolboxButton type="p" label={t('toolbox_paragraph')} icon={<Pilcrow size={20} />} />
            <DraggableToolboxButton type="hr" label={t('toolbox_divider')} icon={<Minus size={20} />} />
            <DraggableToolboxButton type="blockquote" label={t('toolbox_quote')} icon={<MessageSquareQuote size={20} />} />
            <DraggableToolboxButton type="ul" label={t('toolbox_list')} icon={<List size={20} />} />
            <DraggableToolboxButton type="ol" label={t('toolbox_ordered_list')} icon={<ListOrdered size={20} />} />
            <DraggableToolboxButton type="code" label={t('toolbox_code_block')} icon={<Code2 size={20} />} />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('toolbox_inputs')}</h3>
          <div className="grid grid-cols-2 gap-2">
            <DraggableToolboxButton type="text" label={t('toolbox_text')} icon={<Type size={20} />} />
            <DraggableToolboxButton type="textarea" label={t('toolbox_text_area')} icon={<Type size={20} />} />
            <DraggableToolboxButton type="email" label={t('toolbox_email')} icon={<Mail size={20} />} />
            <DraggableToolboxButton type="password" label={t('toolbox_password')} icon={<KeyRound size={20} />} />
            <DraggableToolboxButton type="number" label={t('toolbox_number')} icon={<Hash size={20} />} />
            <DraggableToolboxButton type="url" label={t('toolbox_url')} icon={<Globe size={20} />} />
            <DraggableToolboxButton type="tel" label={t('toolbox_telephone')} icon={<Phone size={20} />} />
            <DraggableToolboxButton type="date" label={t('toolbox_date')} icon={<Calendar size={20} />} />
            <DraggableToolboxButton type="time" label={t('toolbox_time')} icon={<Clock size={20} />} />
            <DraggableToolboxButton type="datetime" label={t('toolbox_datetime')} icon={<Calendar size={20} />} />
            <DraggableToolboxButton type="file" label={t('toolbox_file_upload')} icon={<FileUp size={20} />} />
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('toolbox_choice_inputs')}</h3>
          <div className="grid grid-cols-2 gap-2">
            <DraggableToolboxButton type="select" label={t('toolbox_select_box')} icon={<ChevronsUpDown size={20} />} />
            <DraggableToolboxButton type="choice" label={t('toolbox_choice')} icon={<CheckSquare2 size={20} />} />
            <DraggableToolboxButton type="pictureChoice" label={t('toolbox_picture_choice')} icon={<Image size={20} />} />
            <DraggableToolboxButton type="rating" label={t('toolbox_rating')} icon={<Star size={20} />} />
            <DraggableToolboxButton type="opinionScale" label={t('toolbox_opinion_scale')} icon={<ChevronsUpDown size={20} />} />
          </div>
        </div>
      </div>
    </aside>
  );
};

const ToolboxButton = ({ label, icon }: { label: string; icon: React.ReactNode; }) => (
  <div className="flex flex-col items-center justify-center p-3 bg-white border border-gray-300 rounded-lg cursor-grab text-sm text-center text-gray-700">
    {icon}
    <span className="mt-1">{label}</span>
  </div>
);

export default Toolbox;