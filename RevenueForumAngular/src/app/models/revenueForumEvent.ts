export interface RevenueForumEvent {
  eventId: string;
  title: string;
  description : string;
  address: Address;
  speakers: Speaker[];
  participants: Participant[];
  startDateTime: string;
  endDateTime: string;
  material: Material;
  showExtended:boolean;


}

export interface Address{
  details: string;
  city: string;
  pinCode: number;
  state: string;
  country: string;
  linkToGoogleMap: string;
}


export interface Material{
  pathToSlides: string;
  linkToVideo: string;
  pathToAttachment: string;
}

export interface Participant{

  name: string;
  emailId: string;
  organization: string;
}


export interface Speaker{
  name : string;
  organization : string;
  linkToLinkedInProfile: string;
  pathToImage: string;

}



