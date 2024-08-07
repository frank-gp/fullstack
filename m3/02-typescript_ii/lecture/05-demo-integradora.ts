interface ITrack {
  title: string;
}

interface ISong extends ITrack {
  artist: string;
  duration: number;
}

interface IPodcast extends ITrack {
  host: string;
  episodes: number;
}

interface IAudiobook extends ITrack {
  author: string;
  duration: number;
}

interface IPlaylist {
  name: string;
  // playlist: (ISong | IPodcast | IAudiobook)[];
  playlist: ITrack[];
}

// const miArr: (number | string | boolean)[] = [1, 2, "hola", true];

const song1: ISong = {
  title: "Cancion 1",
  artist: "Artista 1",
  duration: 120,
};

const podcast1: IPodcast = {
  title: "Cuentos desde la cripta",
  host: "una calavera",
  episodes: 100,
};

const audiobook1: IAudiobook = {
  title: "El principito",
  author: "Antoine de Saint-Exupery",
  duration: 100,
};

const myPlaylist: IPlaylist = {
  name: "Mi Playlist",
  playlist: [song1, podcast1, audiobook1],
};


