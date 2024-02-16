<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\JoinController;
use App\Interface\RapidApiInterface;
use App\Models\Category;
use App\Models\User;
use App\Service\LoginService;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class AdminApprovedUserController extends AdminController
{
    private RapidApiInterface $rapidApiService;

    public function __construct(RapidApiInterface $rapidApiService)
    {
        $this->rapidApiService = $rapidApiService;
    }

    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Register Users';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid(): Grid
    {
        $grid = new Grid(new User());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('userDetail.first_name', __('FIRST NAME'))->sortable();
        $grid->column('userDetail.last_name', __('LAST NAME'))->sortable();
        $grid->column('userDetail.phone', __('PHONE'))->sortable();
        $grid->column('email', __('EMAIL'))->sortable();
        $grid->column('status', __('Status'))->display(function ($status) {
            return $status ? 'Active' : 'Inactive';
        });
        $grid->model()->where('status', true);
        $grid->disableCreateButton();

        return $grid;
    }

    /**
     * @param $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(User::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new User());

        $form->radio('status', __('Status'))
            ->options([1 => 'Confirm', 0 => 'Cancel']);

        $form->text('userDetail.first_name', __('First Name'))->required();
        $form->text('userDetail.last_name', __('Last Name'))->required();
        $form->mobile('userDetail.phone', __('Phone'))->required();
        $form->email('email', __('Email'))->required();
        $form->text('userDetail.influencer_name', __('Influencer name'))->required();
        $form->text('userDetail.facebook', __('Facebook username'));
        $form->text('userDetail.instagram', __('Instagram username'));
        $form->text('userDetail.tiktok', __('Tiktok username'));
        $form->text('userDetail.youtube', __('Youtube channel ID'));
        $form->text('userDetail.twitter', __('Twitter username'));
        $form->text('userDetail.telegram', __('Telegram username'));
        $form->multipleSelect('categories')
            ->options(Category::all()
                ->pluck('name', 'id'))->required();
        $form->select('userDetail.account_type', __('Account type'))
            ->options([0 => 'Not verifed', 1 => 'Verifed'])->required();
        $form->text('userDetail.gender', __('Gender'))->required();
        $form->date('userDetail.birthday', __('Birthday'))->required();
        $form->text('userDetail.language', __('Language'))->required();
        $form->textarea('userDetail.additional_information', __('Additional information'))->required();

        $form->saved(function (Form $form) {
            (new LoginService($this->rapidApiService))->createUserSocialMedia($form->userDetail, $form->model()->id);
        });

        return $form;
    }
}
