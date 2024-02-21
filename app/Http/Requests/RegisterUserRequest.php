<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'selectCategories' => 'required',
            'location' => 'required',
            'gender' => 'required',
            'birthday' => 'required',
            'language' => 'required',
            'additional_information' => 'required',
            'account_type' => 'required',
        ];
    }

    /**
     * @return array
     */
    public function messages(): array
    {
        return [
            'first_name.required' => __('validation.required'),
            'last_name.required' => __('validation.required'),
            'influencer_name.required' => __('validation.required'),
            'gender.required' => __('validation.required'),
            'birthday.required' => __('validation.required'),
            'email.required' => __('validation.required'),
            'language.required' => __('validation.required'),
            'additional_information.required' => __('validation.required'),
            'account_type.required' => __('validation.required'),
            'email.email' => __('validation.email'),
        ];
    }
}
