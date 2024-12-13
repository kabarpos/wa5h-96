import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Eye, Edit2, Trash2 } from "lucide-react";
import { InvitationForm } from "@/components/InvitationForm";
import { useState } from "react";
import { RsvpComments } from "@/components/rsvp/RsvpComments";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy data for demonstration
const dummyInvitations = [
  {
    id: 1,
    groomName: "Ahmad Rizky",
    brideName: "Siti Nurhaliza",
    date: "2024-06-15",
    venue: "Hotel Grand Hyatt Jakarta",
    status: "active",
  },
  {
    id: 2,
    groomName: "Budi Santoso",
    brideName: "Dewi Kartika",
    date: "2024-07-20",
    venue: "Balai Kartini Jakarta",
    status: "draft",
  },
];

const Invitations = () => {
  const [invitations] = useState(dummyInvitations);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="invitations" className="space-y-6">
        <TabsList>
          <TabsTrigger value="invitations">Undangan</TabsTrigger>
          <TabsTrigger value="rsvp">RSVP</TabsTrigger>
        </TabsList>

        <TabsContent value="invitations" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Wedding Invitations</h2>
              <p className="text-muted-foreground">
                Manage your digital wedding invitations here.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Invitation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create New Wedding Invitation</DialogTitle>
                  <DialogDescription>
                    Fill in the details below to create your digital wedding invitation.
                  </DialogDescription>
                </DialogHeader>
                <InvitationForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {invitations.map((invitation) => (
              <Card key={invitation.id} className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    {invitation.groomName} & {invitation.brideName}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(invitation.date).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-sm">{invitation.venue}</p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        invitation.status === "active"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                    >
                      {invitation.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Edit2 className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rsvp">
          <RsvpComments />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Invitations;