import '../index.css';
import { Button } from '../components/Button';
import { ShareIcon } from '../icons/Shareicon';
import { PlusIcon } from '../icons/PlusIcon';
import { Card } from '../components/Card';
import { CreateContentModel } from '../components/CreateContentModel';
import { useState } from 'react';
import { Sidebar } from '../components/sidebarComponents';
import { useContent } from '../hooks/useContent'; 

export function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const { contentData, loading, error } = useContent();

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-4 ml-72">
        <div className="flex justify-end space-x-4 mb-4">
          {modelOpen && (
            <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />
          )}

          <Button
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
            onClick={() => setModelOpen(true)}
          />
          <Button variant="secondary" text="Share" startIcon={<ShareIcon />} />
        </div>

        <div className="flex flex-wrap gap-4">
          {loading && <p>Loading content...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!loading &&
            !error &&
            contentData.map((content, index) => (
              <Card
                key={index}
                type={content.type}
                link={content.link}
                title={content.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
