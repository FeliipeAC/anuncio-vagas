import { ErrorsFormsService } from './../services/errors-forms.service';
import { TextareaFormComponent } from './textarea-form/textarea-form.component';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonSecondaryComponent } from './button-secondary/button-secondary.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SelectFormComponent } from './selct-form/select-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    InputFormComponent,
    SelectFormComponent,
    TextareaFormComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,

    // Angular Material
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    FormsModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  exports: [
    // Components
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    InputFormComponent,
    SelectFormComponent,
    TextareaFormComponent,

    // Angular Material
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    FormsModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  providers: [ErrorsFormsService],
})
export class MaterialDesignModule {}
