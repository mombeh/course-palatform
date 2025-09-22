'use client';

import { useState } from 'react';
import { tutorProfile } from '../../../data/mockTutors';
import { Card, CardContent } from '@/components/ui/card';

export default function SettingsPage() {
  const [profile, setProfile] = useState(tutorProfile);
  const [preview, setPreview] = useState<string | null>(profile.avatar || null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      setProfile({
        ...profile,
        [name]: e.target.checked,
      });
    } else {
      setProfile({
        ...profile,
        [name]: value,
      });
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      setProfile({
        ...profile,
        avatar: reader.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    console.log('Updated profile:', profile);
    alert('✅ Settings saved successfully!');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Profile Info */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Profile Information</h2>

          {/* Profile Picture Upload */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm text-gray-500">No Image</span>
              )}
            </div>
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Bio</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Payment Info */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Payment Information</h2>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Payment Method</label>
            <input
              type="text"
              name="paymentMethod"
              value={profile.paymentMethod}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Payment Details</label>
            <input
              type="text"
              name="paymentDetails"
              value={profile.paymentDetails}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Preferences</h2>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="notifications"
              checked={profile.notifications}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label className="text-sm">Enable Notifications</label>
          </div>
        </CardContent>
      </Card>

      <button
        onClick={handleSave}
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
      >
        Save Settings
      </button>
    </div>
  );
}
