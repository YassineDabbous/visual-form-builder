import React from 'react';
import { X } from 'lucide-react';

interface TagsInputProps {
  label: string;
  description?: string;
  tags: string[];
  onTagsChange: (newTags: string[]) => void;
  placeholder?: string;
}

const TagsInput = ({ label, description, tags, onTagsChange, placeholder }: TagsInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' && e.key !== ',') return;
    e.preventDefault(); // Prevent form submission on Enter

    const value = e.currentTarget.value.trim();
    if (!value) return;

    if (!tags.includes(value)) {
      onTagsChange([...tags, value]);
    }
    e.currentTarget.value = '';
  };

  const removeTag = (indexToRemove: number) => {
    onTagsChange(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="w-full p-2 border border-gray-300 rounded-md shadow-sm flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center gap-1 bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
            {tag}
            <button onClick={() => removeTag(index)} className="hover:text-red-600">
              <X size={14} />
            </button>
          </div>
        ))}
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-grow bg-transparent outline-none p-1"
        />
      </div>
      {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
    </div>
  );
};

export default TagsInput;