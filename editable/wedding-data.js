/**
 * wedding-data.js — Editable data layer for Marigold Bhavan
 * Configured for Jash & Krisha Engagement Ceremony (Gujarati Cultural Theme)
 * 
 * VERIFIED DETAILS:
 * Names: ચિ. જશ (Jash) & ચિ. સૌ. કાં. ક્રિશા (Krisha)
 * Event: શુભ સગાઈ મહોત્સવ (Engagement Ceremony)
 * Date: શુક્રવાર, ૧૩ નવેમ્બર ૨૦૨૬ (13 November 2026)
 * Time: સવારે ૯:૦૦ કલાકે (9:00 AM)
 * Venue: શ્રી ખમાલાઈ માતાજી મંદિર, મણુંદ, ગુજરાત ૩૮૪૨૬૦
 * 
 * Groom Side: સુપુત્ર ચિ. જશ — શ્રીમતી ઉર્મિલાબેન અને શ્રી જીગ્નેશભાઈ હરજીભાઈ પટેલ (પટેલ પરિવાર • મણુંદ)
 * Bride Side: સુપુત્રી ચિ. સૌ. કાં. ક્રિશા — શ્રીમતી વૈશાલીબેન અને શ્રી પીયૂષભાઈ કરશનભાઈ પટેલ (પટેલ પરિવાર • બલિસણા)
 */

window.WEDDING_DATA = {
  // Couple Details (વર અને કન્યા વિગત)
  couple: {
    groom: "ચિ. જશ",
    bride: "ચિ. સૌ. કાં. ક્રિશા",
    groomShort: "જશ",
    brideShort: "ક્રિશા",
    groomEn: "Jash",
    brideEn: "Krisha",
    monogram: "J & K",
    groomParents: "શ્રીમતી ઉર્મિલાબેન અને શ્રી જીગ્નેશભાઈ હરજીભાઈ પટેલ",
    brideParents: "શ્રીમતી વૈશાલીબેન અને શ્રી પીયૂષભાઈ કરશનભાઈ પટેલ",
    groomParentsEn: "Son of Urmilaben & Jigneshbhai Harjibhai Patel",
    brideParentsEn: "Daughter of Vaishaliben & Piyushbhai Karshanbhai Patel",
  },

  // Event Details (શુભ પ્રસંગ વિગત)
  event: {
    title: "સગાઇ રસમ",
    eventTitle: "જશ & ક્રિશા — સગાઇ રસમ",
    dateLabel: "૧૩.૧૧.૨૦૨૬",
    displayDate: "૧૩ નવેમ્બર ૨૦૨૬",
    dayLine: "શુક્રવાર, ૧૩ નવેમ્બર ૨૦૨૬",
    timeLine: "સવારે ૯:૦૦ કલાકે (શુભ મુહૂર્ત)",
    // Start and end ISO local time strings (IST +05:30) for countdown & calendar
    start: "2026-11-13T09:00:00",
    end: "2026-11-13T13:00:00",
    timeZoneOffset: "+05:30",
    invitationLine: "સ્નેહી શ્રી, પરમકૃપાળુ પરમાત્મા તથા વડીલોના શુભ આશીર્વાદથી અમારા સુપુત્ર અને સુપુત્રીના શુભ સગાઈ મહોત્સવનું સ્નેહભર્યું આમંત્રણ...",
  },

  // Backward compatibility alias for wedding block
  wedding: {
    title: "સગાઇ રસમ",
    eventTitle: "જશ & ક્રિશા — સગાઇ રસમ",
    dateLabel: "૧૩.૧૧.૨૦૨૬",
    displayDate: "૧૩ નવેમ્બર ૨૦૨૬",
    dayLine: "શુક્રવાર, ૧૩ નવેમ્બર ૨૦૨૬",
    timeLine: "સવારે ૯:૦૦ કલાકે",
    start: "2026-11-13T09:00:00",
    end: "2026-11-13T13:00:00",
    timeZoneOffset: "+05:30",
    invitationLine: "સ્નેહી શ્રી, પરમકૃપાળુ પરમાત્મા તથા વડીલોના શુભ આશીર્વાદથી અમારા સુપુત્ર અને સુપુત્રીના શુભ સગાઈ મહોત્સવનું સ્નેહભર્યું આમંત્રણ...",
  },

  // Family Details (પરિવાર પરિચય)
  family: {
    groomSide: {
      name: "ચિ. જશ",
      nameEn: "Jash",
      relation: "સુપુત્ર",
      parents: "શ્રીમતી ઉર્મિલાબેન અને શ્રી જીગ્નેશભાઈ હરજીભાઈ પટેલ",
      location: "પટેલ પરિવાર • મણુંદ",
      city: "મણુંદ",
    },
    brideSide: {
      name: "ચિ. સૌ. કાં. ક્રિશા",
      nameEn: "Krisha",
      relation: "સુપુત્રી",
      parents: "શ્રીમતી વૈશાલીબેન અને શ્રી પીયૂષભાઈ કરશનભાઈ પટેલ",
      location: "પટેલ પરિવાર • બલિસણા",
      city: "બલિસણા",
    },
  },

  // Invitation Notes & Closing (આમંત્રણ પત્રિકા અને સ્નેહાધીન)
  invitation: {
    shloka: "॥ વક્રતુંડ મહાકાય સૂર્યકોટિ સમપ્રભ । નિર્વિઘ્નં કુરુ મે દેવ સર્વકાર્યેષુ સર્વદા ॥",
    mangalGaan: "।। શ્રી ગણેશાય નમઃ ।।\n।।શ્રી ખમલાઈ માતાજી નમઃ।।",
    note: "પરમકૃપાળુ પરમાત્મા તથા કુળદેવી શ્રી ખમાલાઈ માતાજીના પરમ આશીર્વાદથી, પટેલ પરિવાર (મણુંદ) અને પટેલ પરિવાર (બલિસણા) આપ સર્વે સ્નેહીજનો, વડીલો, સગા-સંબંધીઓ અને મિત્રવૃંદને જશ અને ક્રિશાના શુભ વાગ્દાન (સગાઈ) પ્રસંગે પધારી નવયુગલને મંગલ આશીર્વાદ પાઠવવા હાર્દિક ભાવભર્યું નિમંત્રણ પાઠવે છે.",
    closing: "લિ. સમસ્ત પટેલ પરિવાર (મણુંદ & બલિસણા)",
  },

  // Venue Details (શુભ સ્થળ વિગત)
  venue: {
    name: "શ્રી ખમાલાઈ માતાજી મંદિર",
    nameEn: "Khamalaimata Temple",
    address: "મણુંદ, જિલ્લો પાટણ, ગુજરાત ૩૮૪૨૬૦",
    addressEn: "Manund, Gujarat 384260",
    city: "મણુંદ",
    state: "ગુજરાત",
    pincode: "૩૮૪૨૬૦",
    query: "Khamalaimata Temple, Manund, Gujarat 384260",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Khamalaimata+Temple,+Manund,+Gujarat+384260",
    mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=Khamalaimata+Temple,+Manund,+Gujarat+384260",
  },

  // Image Assets (ફોટોગ્રાફ્સ)
  images: {
    customerPhotos: [
      {
        id: "photo-1",
        url: "./editable/assets/customer-photo-1.jpg",
        caption: "વ્હાલભરી યાદો",
        captionSub: "ચિ. જશ (બાળપણના સંસ્મરણો)",
        captionGu: "વ્હાલભરી યાદો",
      },
      {
        id: "photo-3",
        url: "./editable/assets/customer-photo-3.jpg",
        caption: "શુભ સંગાથ",
        captionSub: "જશ અને ક્રિશા (Jash & Krisha)",
        captionGu: "શુભ સંગાથ",
      },
      {
        id: "photo-2",
        url: "./editable/assets/customer-photo-2.jpg",
        caption: "મીઠી સ્મૃતિઓ",
        captionSub: "ચિ. ક્રિશા (લાડકોડની ક્ષણો)",
        captionGu: "મીઠી સ્મૃતિઓ",
      },
    ],
    couple: "./editable/assets/couple.png",
    footerBg: "./editable/assets/footer-bg.jpg",
    map: "./editable/assets/map.jpg",
  },

  // Music Configuration
  audio: {
    enabled: true,
    url: "./editable/assets/music.mp3",
    title: "શુભ મંગલ શરણાઈ સંગીત",
  },
};
