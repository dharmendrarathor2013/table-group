import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
//import { ArtistsService } from 'src/app/services/artists.service';

@Component({
    selector: 'add-dialog',
    templateUrl: './add-dialog.html',
})

export class AddDialog implements OnInit {

    angForm: any;
    event_detail: any;
    event_data: any;
    test: any[] | undefined;
    event_name: any
    event_index: any;
    eventname_detail: any
    document: any;
    url: any;
    show:any;

    constructor(@Inject(DOCUMENT) private _document: Document, private form: FormBuilder) {

        this.createForm();
    }

    createForm() {
        this.angForm = this.form.group({
            name: ['', Validators.required],
            filepath: ['', Validators.required]
        });
    }

    ngOnInit(): void {

        //Fetch CurrentEvent from database
        let eventnametemp = localStorage.getItem("EventName");
        this.eventname_detail = eventnametemp;
        this.event_name = JSON.parse(this.eventname_detail);
    }

    ShowPlayButton(path:any) {
     this.url = 'assets/Images/Audio.jpg';
     this.show = 'ruby';
    }

    UploadAudio(value: any) {
        
        console.log(value.name);
        console.log(value.filepath);

        let eventdetails = [];

        if (this.angForm.invalid) {
            alert('Please eneter value')
        }
        else {
            if (localStorage.getItem('EventDetail')) {
                eventdetails = JSON.parse(localStorage.getItem('EventDetail') || "{}");
                // events = [value, ...events];
              
            }

            if (eventdetails.length > 0) {
                let temp = {
                    name: value.name,
                    filepath: value.filepath
                }
                
                const newArray = eventdetails.filter((e: any) => e.event == this.event_name);
                if (newArray.length == 0) {
                    let temp = {
                        event: this.event_name, song_detail:
                            [{
                                name: value.name,
                                filepath: value.filepath
                            }]
                    }
                    eventdetails.push(temp)
                    localStorage.setItem('EventDetail', JSON.stringify(eventdetails));

                    alert('Song added successfully');
                    window.location.reload();
                }
               
                for (let item of newArray) {

                    if (item.event == this.event_name) {
                        this.event_index = eventdetails.map((o: any) => o.event).indexOf(this.event_name)
                        console.log('index', this.event_index);
                        eventdetails[this.event_index].song_detail.push(temp)

                        localStorage.setItem('EventDetail', JSON.stringify(eventdetails));

                        alert('Song added successfully');
                        this.angForm.reset();
                        window.location.reload();
                        return;

                    }

                    else {

                        console.log('else index', this.event_index);
                        let temp = {
                            event: this.event_name, song_detail:
                                [{
                                    name: value.name,
                                    filepath: value.filepath
                                }]
                        }
                        eventdetails.push(temp)
                        localStorage.setItem('EventDetail', JSON.stringify(eventdetails));

                        alert('Song added successfully');
                        this.angForm.reset();
                        window.location.reload();
                        return;
                    }
                }
            }

            else {
                let temp = {
                    event: this.event_name, song_detail:
                        [{
                            name: value.name,
                            filepath: value.filepath
                        }]
                }
                eventdetails.push(temp)
                localStorage.setItem('EventDetail', JSON.stringify(eventdetails));

                alert('Song added successfully');
                this.angForm.reset();
            }
            // this.event_index = this.event_data.map((o:any)=> o.event).indexOf(this.event_name)
            // console.log("oioqeqwewqeqw", this.event_index);
            //  console.log('length', Object.keys(this.event_data).length);

            // for (let item of this.event_data) {
            //     //  console.log('inside loop');

            //     if (item.event == this.event_name) {
            //         this.event_index = this.event_data.map((o: any) => o.event).indexOf(this.event_name)
            //         console.log('index', this.event_index);

            //         // console.log('wedcewe',eventdetails[1].song_detail.push(temp));

            //         // console.log('index: ', this.event_index);
            //         //  eventdetails[this.event_index].song_detail.push(temp.song_detail)
            //         // console.log('songdetail done', eventdetails.song_detail);

            //         //  eventdetails[this.event_index].song_detail.push(temp.song_detail)
            //     }
            // }

            // eventdetails[0].song_detail.push(temp.song_detail)
            //console.log('outside loop');

            //  eventdetails.song_detail.push(temp.song_detail);

            // console.log(eventdetails[this.event_index].song_detail);
            // eventdetails.push(temp.song_detail)

            // temp.song_detail.splice(1, 0,"Lemon", "Kiwi");
            // eventdetails.song_detail.push(temp.song_detail);

            //console.log('hbuyvbuv',eventdetails);

            // eventdetails[this.event_index].song_detail.push(temp)
            // window.location.reload();
        }
    }

    playAudio(temp: any) {

        let audio = new Audio();

        var filename = temp.value.replace(/^.*\\/, "");
        var path = "../../../assets/songs/";
        path += filename;

        audio.src = path;
        audio.load();
        audio.play();
    }
}
