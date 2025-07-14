import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    // Define the JSON response directly
    const jsonResponse = {
        data: {
            info: "PixelVault operates a self-hosted, customized instance of lanyard-profile-readme, an open-source tool that allows you to display your Discord presence on your GitHub profile. Find out more here: https://github.com/cnrad/lanyard-profile-readme",
            pixelvault_discord_invite: "https://discord.gg/pxlvltco",
        },
        success: true,
    };

    return NextResponse.json(jsonResponse);
}
