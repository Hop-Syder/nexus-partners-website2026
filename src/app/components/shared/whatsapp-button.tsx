/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Floating WhatsApp button for quick contact.
 * @created 2026-02-22
 * @updated 2026-02-22
 * 🌐 ceo.nexus-partners.xyz
 */
'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import Magnetic from '../ui/magnetic'

export default function WhatsAppButton() {
    return (
        <div className="fixed bottom-24 right-8 z-[999]">
            <Magnetic>
                <a
                    href="https://wa.me/2290196701733"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#25D366] text-white shadow-lg transition duration-300 ease-in-out hover:scale-110"
                >
                    <Icon icon="logos:whatsapp-icon" className="text-2xl" />
                </a>
            </Magnetic>
        </div>
    )
}
