"use client";

import { useCallback, useState } from "react";
import { Button, ButtonVariant } from "@/components/button";
import { DocumentUploadModal } from "@/modals/document-upload";

export default function Page() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <div>
      {!showModal && (
        <Button
          $variant={ButtonVariant.Primary}
          onClick={() => setShowModal(true)}
        >
          Upload Document
        </Button>
      )}

      {showModal && <DocumentUploadModal onClose={handleModalClose} />}
    </div>
  );
}
